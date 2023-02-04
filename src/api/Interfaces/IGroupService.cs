using FileUploadApi.Requests;
using FileUploadApi.Response;
namespace FileUploadApi.Interfaces
{
    public interface IGroupService
    {
        Task<GroupResponse> CreateGroupAsync(GroupRequest GroupRequest);
        Task<List<GroupResponse>> ReadGroupsAsync();
    }
}