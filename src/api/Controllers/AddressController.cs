using FileUploadApi.Interfaces;
using FileUploadApi.Requests;
using FileUploadApi.Response;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Mvc;
namespace FileUploadApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AddressController : ControllerBase
    {
        private readonly ILogger<AddressController> logger;
        private readonly IAddressService addressService;
        public AddressController(ILogger<AddressController> logger, IAddressService addressService)
        {
            this.logger = logger;
            this.addressService = addressService;
        }
        [HttpPost]
        [Route("")]
        public async Task<IActionResult> SubmitAddress([FromBody] AddressRequest addressRequest)
        {
            if (addressRequest == null)
            {
                return BadRequest(new RecordResponse { Success = false, ErrorCode = "S01", Error = "Invalid post request" });
            }
            var addressResponse = await addressService.CreateAddressAsync(addressRequest);
            if (!addressResponse.Success)
            {
                return NotFound(addressResponse);
            }
            return Ok(addressResponse.Address);
        }
    }
}