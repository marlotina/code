using Newtonsoft.Json;
using Patterns.Core.API.Api.Model;
using Patterns.Core.API.Domain.Model;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace Patterns.Core.API.Infrastrucutre
{
    public class HttpServices
    {
        public async Task<IEnumerable<SuperHuman>> GetByService()
        {
            var client = new RestClient("localhost");
            var restRequest = new RestRequest("/user/get", Method.POST);

            var requestVoteUser = new CreateSuperHumanRequest()
            {
                Name = "",
                Type = Domain.enums.EnumSuperHumanType.Hero
            };

            restRequest.AddJsonBody(requestVoteUser);

            var response = await client.ExecuteAsync<IEnumerable<SuperHuman>>(restRequest);
            if (response.StatusCode == HttpStatusCode.OK)
            {
                return JsonConvert.DeserializeObject<IEnumerable<SuperHuman>>(response.Content);
            }

            return null;
        }

        public void GetUserFindByEmailNotFound()
        {
            var client = new RestClient("localhost");
            var request = new RestRequest("api/v1/User/UserFindByEmail?email=dafsfsasdt201911190319@gmail.com", Method.GET);

            var response = client.Execute<SuperHuman>(request);
            //Assert.IsTrue(response.StatusCode == HttpStatusCode.NotFound);
        }
    }
}
