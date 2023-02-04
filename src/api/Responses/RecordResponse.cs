using FileUploadApi.Response.Models;

namespace FileUploadApi.Response
{
    public class RecordResponse : BaseResponse
    {
        public RecordModel? Record { get; set; }
    }
}