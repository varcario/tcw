using FileUploadApi.Entities;
using FileUploadApi.Helpers;
using FileUploadApi.Interfaces;
using FileUploadApi.Requests;
using FileUploadApi.Response;
using FileUploadApi.Response.Models;
namespace FileUploadApi.Services
{
    public class AddressService : IAddressService
    {
        private readonly TcwDbContext tcwDbContext;
        public AddressService(TcwDbContext tcwDbContext)
        {
            this.tcwDbContext = tcwDbContext;
        }
        public async Task<AddressResponse> CreateAddressAsync(AddressRequest addressRequest)
        {
            var address = new Entities.Address
            {
                StreetAddress = addressRequest.StreetAddress,
                Suite = addressRequest.Suite,
                City= addressRequest.City,
                ZipCode= addressRequest.ZipCode,
                StateId= addressRequest.StateId,
                Ts = DateTime.Now,
                Published = true
            };
            var addressEntry = await tcwDbContext.Address.AddAsync(address);
            var saveResponse = await tcwDbContext.SaveChangesAsync();
            if (saveResponse < 0)
            {
                return new AddressResponse { Success = false, Error = "Issue while saving the address", ErrorCode = "CP01" };
            }
            var addressEntity = addressEntry.Entity;
            var addressModel = new AddressModel
            {
                Id = addressEntity.Id,
                StreetAddress = addressEntity.StreetAddress,
                Suite = addressEntity.Suite,
                City= addressEntity.City,
                ZipCode= addressEntity.ZipCode,
                StateId= addressEntity.StateId
            };
            return new AddressResponse { Success = true, Address = addressModel };
        }
    }
}