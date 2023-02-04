namespace FileUploadApi.Requests
{
    public class AddressRequest
    { 
        public string? StreetAddress { get; set; }
        public string? Suite { get; set; }
        public string? City { get; set; }
        public string? ZipCode { get; set; }
        public int StateId { get; set; }
    }
}