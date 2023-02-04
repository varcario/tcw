using FileUploadApi.Interfaces;
using FileUploadApi.Requests;
using FileUploadApi.Response;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Mvc;
namespace FileUploadApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GroupController : ControllerBase
    {
        private readonly ILogger<GroupController> logger;
        private readonly IGroupService groupService;
        public GroupController(ILogger<GroupController> logger, IGroupService groupService)
        {
            this.logger = logger;
            this.groupService = groupService;
        }
        [HttpPost]
        [Route("")]
        public async Task<IActionResult> SubmitGroup([FromBody] GroupRequest groupRequest)
        {
            if (groupRequest == null)
            {
                return BadRequest(new RecordResponse { Success = false, ErrorCode = "S01", Error = "Invalid post request" });
            }
            var groupResponse = await groupService.CreateGroupAsync(groupRequest);
            if (!groupResponse.Success)
            {
                return NotFound(groupResponse);
            }
            
            return Ok(groupResponse);
        }

        [HttpGet]
        [Route("")]
        public async Task<IActionResult> GetGroups()
        {
            
            var groupResponse = await groupService.ReadGroupsAsync();
            if (groupResponse.Count == 0)
            {
                return NotFound(groupResponse);
            }

            return Ok(groupResponse);
        }
    }
}