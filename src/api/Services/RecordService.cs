using FileUploadApi.Entities;
using FileUploadApi.Helpers;
using FileUploadApi.Interfaces;
using FileUploadApi.Requests;
using FileUploadApi.Response;
using FileUploadApi.Response.Models;
namespace FileUploadApi.Services
{
    public class RecordService : IRecordService
    {
        private readonly TcwDbContext tcwDbContext;
        private readonly IWebHostEnvironment environment;
        public RecordService(TcwDbContext tcwDbContext, IWebHostEnvironment environment)
        {
            this.tcwDbContext = tcwDbContext;
            this.environment = environment;
        }
        public async Task<RecordResponse> CreateRecordAsync(RecordRequest recordRequest)
        {
            var record = new Entities.Record
            {
                SpeakerId = recordRequest.SpeakerId,
                Description = recordRequest.Description,
                FilePath = recordRequest.ImagePath,
                Ts = DateTime.Now,
                Published = true
            };
            var postEntry = await tcwDbContext.Record.AddAsync(record);
            var saveResponse = await tcwDbContext.SaveChangesAsync();
            if (saveResponse < 0)
            {
                return new RecordResponse { Success = false, Error = "Issue while saving the post", ErrorCode = "CP01" };
            }
            var postEntity = postEntry.Entity;
            var postModel = new RecordModel
            {
                Id = postEntity.Id,
                Description = postEntity.Description,
                Ts = postEntity.Ts,
                Imagepath = Path.Combine(postEntity.FilePath),
                SpeakerId = postEntity.SpeakerId
            };
            return new RecordResponse { Success = true, Record = postModel };
        }
        public async Task SaveAudioFileAsync(RecordRequest postRequest)
        {
            var uniqueFileName = FileHelper.GetUniqueFileName(postRequest.Image.FileName);
            Console.WriteLine($"speakerId => {postRequest.SpeakerId.ToString()}");
            Console.WriteLine($"environment.WebRootPath => {environment.WebRootPath}");
            Console.WriteLine($"Directory.GetCurrentDirectory() => {Directory.GetCurrentDirectory()}");
            var uploads = Path.Combine(environment.WebRootPath, "users", "posts", postRequest.SpeakerId.ToString());
            
            var filePath = Path.Combine(uploads, uniqueFileName);
            
            Directory.CreateDirectory(Path.GetDirectoryName(filePath));
            await postRequest.Image.CopyToAsync(new FileStream(filePath, FileMode.Create));
            
            postRequest.ImagePath = filePath;
            return;
        }
    }
}