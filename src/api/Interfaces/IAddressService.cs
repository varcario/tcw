using FileUploadApi.Requests;
using FileUploadApi.Response;
namespace FileUploadApi.Interfaces
{
    public interface IAddressService
    {
        Task<AddressResponse> CreateAddressAsync(AddressRequest addressRequest);       
    }
}