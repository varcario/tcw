using FileUploadApi.Requests;
using FileUploadApi.Response;
namespace FileUploadApi.Interfaces
{
    public interface IRecordService
    {
        Task SavePostImageAsync(RecordRequest postRequest);
        Task<RecordResponse> CreatePostAsync(RecordRequest postRequest);
    }
}