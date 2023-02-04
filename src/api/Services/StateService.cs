using FileUploadApi.Entities;
using FileUploadApi.Interfaces;
using FileUploadApi.Response;
using FileUploadApi.Response.Models;

namespace FileUploadApi.Services
{
    public class StateService : IStateService
    {
        private readonly TcwDbContext tcwDbContext;
        public StateService(TcwDbContext tcwDbContext)
        {
            this.tcwDbContext = tcwDbContext;
        }

        public Task<StateResponse> ReadStatesAsync()
        {
            var states = tcwDbContext.StateLookup.ToArray();

            var response = new StateResponse()
            {
                Success= true,
                States = new StateModel[states.Length]
            };
            for(var i = 0; i < states.Length; i++)                
            {
                var s = states[i];
                response.States[i] = new StateModel
                {
                    Id = s.Id,
                    StateName = s.StateName,
                    Abbreviation = s.Abbreviation,
                };
            }

            return Task.FromResult(response);
        }        
    }
}