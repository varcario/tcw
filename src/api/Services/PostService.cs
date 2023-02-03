using FileUploadApi.Entities;
using FileUploadApi.Helpers;
using FileUploadApi.Interfaces;
using FileUploadApi.Requests;
using FileUploadApi.Response;
using FileUploadApi.Response.Models;
namespace FileUploadApi.Services
{
    public class PostService : IPostService
    {
        private readonly TcwDbContext tcwDbContext;
        private readonly IWebHostEnvironment environment;
        public PostService(TcwDbContext tcwDbContext, IWebHostEnvironment environment)
        {
            this.tcwDbContext = tcwDbContext;
            this.environment = environment;
        }
        public async Task<PostResponse> CreatePostAsync(PostRequest postRequest)
        {
            var post = new Entities.Post
            {
                SpeakerId = postRequest.SpeakerId,
                Description = postRequest.Description,
                Imagepath = postRequest.ImagePath,
                Ts = DateTime.Now,
                Published = true
            };
            var postEntry = await tcwDbContext.Post.AddAsync(post);
            var saveResponse = await tcwDbContext.SaveChangesAsync();
            if (saveResponse < 0)
            {
                return new PostResponse { Success = false, Error = "Issue while saving the post", ErrorCode = "CP01" };
            }
            var postEntity = postEntry.Entity;
            var postModel = new PostModel
            {
                Id = postEntity.Id,
                Description = postEntity.Description,
                Ts = postEntity.Ts,
                Imagepath = Path.Combine(postEntity.Imagepath),
                SpeakerId = postEntity.SpeakerId
            };
            return new PostResponse { Success = true, Post = postModel };
        }
        public async Task SavePostImageAsync(PostRequest postRequest)
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