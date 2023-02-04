using FileUploadApi.Entities;
using FileUploadApi.Helpers;
using FileUploadApi.Interfaces;
using FileUploadApi.Requests;
using FileUploadApi.Response;
using FileUploadApi.Response.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;

namespace FileUploadApi.Services
{
    public class GroupService : IGroupService
    {
        private readonly TcwDbContext tcwDbContext;
        public GroupService(TcwDbContext tcwDbContext)
        {
            this.tcwDbContext = tcwDbContext;
        }
        public async Task<GroupResponse> CreateGroupAsync(GroupRequest groupRequest)
        {
            tcwDbContext.Database.BeginTransaction();
            try
            {
                var group = new Entities.Group
                {
                    GroupName = groupRequest.GroupName,
                    Ts = DateTime.Now,
                    Published = true
                };
                var address = new Entities.Address
                {
                    StreetAddress = groupRequest.StreetAddress,
                    Suite = groupRequest.Suite,
                    City = groupRequest.City,
                    StateId = groupRequest.StateId,
                    ZipCode = groupRequest.ZipCode,
                    Ts = DateTime.Now,
                    Published = true
                };

                var groupEntry = await tcwDbContext.Group.AddAsync(group);
                var addressEntry = await tcwDbContext.Address.AddAsync(address);
                var saveResponse = await tcwDbContext.SaveChangesAsync();
                if (saveResponse < 0)
                {
                    tcwDbContext.Database.RollbackTransaction();
                    return new GroupResponse { Success = false, Error = "Issue while saving the Group", ErrorCode = "CP01" };
                }
                var groupEntity = groupEntry.Entity;
                var addressEntity = addressEntry.Entity;
                var groupModel = new GroupModel
                {
                    Id = groupEntity.Id,
                    GroupName = groupEntity.GroupName
                };
                var addressModel = new AddressModel
                {
                    Id = addressEntity.Id,
                    StreetAddress = addressEntity.StreetAddress,
                    Suite = addressEntity.Suite,
                    City = addressEntity.City,
                    StateId = addressEntity.StateId,
                    ZipCode = addressEntity.ZipCode,
                };
                var groupAddress = new Entities.GroupAddress
                {
                    GroupId = groupEntity.Id,
                    AddressId = addressEntity.Id,
                    Ts = DateTime.Now,
                    Published = true
                };
                var groupAddressEntry = await tcwDbContext.GroupAddress.AddAsync(groupAddress);
                saveResponse = await tcwDbContext.SaveChangesAsync();
                if (saveResponse < 0)
                {
                    tcwDbContext.Database.RollbackTransaction();
                    return new GroupResponse { Success = false, Error = "Issue while saving the Group and Address", ErrorCode = "CP01" };
                }

                tcwDbContext.Database.CommitTransaction();
                return new GroupResponse { Success = true, Group = groupModel, Address = addressModel };
            }
            catch
            {
                tcwDbContext.Database.RollbackTransaction();
                return new GroupResponse { Success = false, Error = "Issue while saving the Group and Address", ErrorCode = "CP01" };
            }
        }

        /// <summary>
        /// Read the GroupAddress junction table to create a list of group responses. 
        /// </summary>
        /// <returns></returns>
        public async Task<List<GroupResponse>> ReadGroupsAsync()
        {
            var groups = await tcwDbContext.Group
               .Join(tcwDbContext.GroupAddress, (g) => g.Id, (ga) => ga.GroupId, (g, ga) => new { g.GroupName, ga.GroupId, ga.AddressId })
               .Join(tcwDbContext.Address, gga => gga.AddressId, a => a.Id, 
                (gga, a) => new GroupResponse
                { 
                   Group = new GroupModel
                   {
                       Id= gga.GroupId,
                       GroupName = gga.GroupName
                   },
                   Address = new AddressModel 
                   { 
                       Id = gga.AddressId,
                       StreetAddress = a.StreetAddress,
                       Suite = a.Suite,
                       City = a.City,
                       StateId= a.StateId,
                       ZipCode  = a.ZipCode
                   },
                   Success = true
                })
               .Select(ggaa=>ggaa).ToListAsync();

            return groups;
        }
    }
}