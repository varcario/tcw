using FileUploadApi.Requests;
using FileUploadApi.Response;
namespace FileUploadApi.Interfaces
{
    public interface IRecordService
    {
        Task SaveAudioFileAsync(RecordRequest recordRequest);
        Task<RecordResponse> CreateRecordAsync(RecordRequest recordRequest);
    }
}