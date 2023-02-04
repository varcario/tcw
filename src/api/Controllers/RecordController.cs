using FileUploadApi.Interfaces;
using FileUploadApi.Requests;
using FileUploadApi.Response;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Mvc;
namespace FileUploadApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RecordController : ControllerBase
    {
        private readonly ILogger<RecordController> logger;
        private readonly IRecordService postService;
        public RecordController(ILogger<RecordController> logger, IRecordService postService)
        {
            this.logger = logger;
            this.postService = postService;
        }
        [HttpPost]
        [Route("")]
        [RequestSizeLimit(50 * 1024 * 1024)]
        public async Task<IActionResult> SubmitPost([FromForm] RecordRequest postRequest)
        {
            if (postRequest == null)
            {
                return BadRequest(new RecordResponse { Success = false, ErrorCode = "S01", Error = "Invalid post request" });
            }
            if (string.IsNullOrEmpty(Request.GetMultipartBoundary()))
            {
                return BadRequest(new RecordResponse { Success = false, ErrorCode = "S02", Error = "Invalid post header" });
            }
            if (postRequest.Image != null)
            {
                await postService.SavePostImageAsync(postRequest);
            }
            var postResponse = await postService.CreatePostAsync(postRequest);
            if (!postResponse.Success)
            {
                return NotFound(postResponse);
            }
            return Ok(postResponse.Record);
        }
    }
}