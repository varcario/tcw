using FileUploadApi.Response.Models;

namespace FileUploadApi.Response
{
    public class StateResponse : BaseResponse
    {
        public StateModel[]? States { get; set; }
    }
}