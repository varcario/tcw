namespace FileUploadApi.Response.Models
{
    public class RecordModel
    {
        public int Id { get; set; }
        public int SpeakerId { get; set; }
        public string? Description { get; set; }
        public string? Imagepath { get; set; }
        public DateTime Ts { get; set; }
    }
}