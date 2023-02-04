namespace FileUploadApi.Requests
{
    public class GroupRequest
    {
        public string? GroupName { get; set; }
        public string? StreetAddress { get; set; }
        public string? Suite { get; set; }
        public string? City { get; set; }
        public string? ZipCode { get; set; }
        public int StateId { get; set; }
    }
}