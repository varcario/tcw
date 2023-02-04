using FileUploadApi.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace FileUploadApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StateController : ControllerBase
    {
        private readonly ILogger<RecordController> logger;
        private readonly IStateService stateService;
        public StateController(ILogger<RecordController> logger, IStateService stateService)
        {
            this.logger = logger;
            this.stateService = stateService;
        }

        [HttpGet]
        [Route("")]
        public async Task<IActionResult> GetStates()
        {

            var postResponse = await stateService.ReadStatesAsync();
            if (!postResponse.Success)
            {
                return NotFound(postResponse);
            }
            return Ok(postResponse.States);
        }
    }
}
