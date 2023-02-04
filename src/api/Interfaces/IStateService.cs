using FileUploadApi.Response;
namespace FileUploadApi.Interfaces
{
    public interface IStateService
    {
        Task<StateResponse> ReadStatesAsync();       
    }
}