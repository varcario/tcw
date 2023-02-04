using FileUploadApi.Response.Models;

namespace FileUploadApi.Response
{
    public class GroupResponse : BaseResponse
    {
        public GroupModel? Group { get; set; }
        public AddressModel? Address { get; set; }
    }
}