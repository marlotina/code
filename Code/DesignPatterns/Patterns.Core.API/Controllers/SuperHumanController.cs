using Microsoft.AspNetCore.Mvc;
using Patterns.Core.API.Api.Mapper.Contract;
using Patterns.Core.API.Api.Model;
using Patterns.Core.API.Application.Contract;
using Patterns.Core.API.Domain.enums;
using System;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Patterns.Core.API.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class SuperHumanController : ControllerBase
    {
        private readonly IManageSuperHuman iManageSuperHuman;
        private readonly ISuperHumanMapper iSuperHumanMapper;
        private readonly ISuperHumanQueryServices iSuperHumanQueryServices;
        public SuperHumanController(
            IManageSuperHuman iManageSuperHuman,
            ISuperHumanQueryServices iSuperHumanQueryServices,
            ISuperHumanMapper iSuperHumanMapper)
        {
            this.iManageSuperHuman = iManageSuperHuman;
            this.iSuperHumanMapper = iSuperHumanMapper;
            this.iSuperHumanQueryServices = iSuperHumanQueryServices;
        }

        // GET: api/<SuperHumanController>
        [HttpGet]
        public async Task<IActionResult> Get(EnumSuperHumanType type)
        {
            try
            {
                var result = await this.iSuperHumanQueryServices.GetSuperHuman(type);
                if (result != null)
                {
                    var response = result.Select(x => this.iSuperHumanMapper.Convert(x));
                    return this.Ok(response);
                }

                return this.NoContent();
            }
            catch (Exception ex) {
                return this.Problem(ex.InnerException.Message);
            }
        }

        // POST api/<SuperHumanController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] CreateSuperHumanRequest request)
        {
            try
            {
                var superHuman = this.iSuperHumanMapper.Convert(request);
                var result = await this.iManageSuperHuman.AddHuman(superHuman);
                if (result != null)
                {
                    return this.Created("Get", result);
                }

                return this.BadRequest();

            }
            catch (Exception ex) 
            {
                return this.Problem(ex.InnerException.Message);
            }
        }

        // DELETE api/<SuperHumanController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            try
            {
                if (id == Guid.Empty)
                    return this.BadRequest();

                var result = await this.iManageSuperHuman.DeleteHuman(id);

                if (result) {
                    return this.Ok();
                }

                return this.BadRequest();
            }
            catch (Exception ex) 
            {
                return this.Problem(ex.InnerException.Message);
            }
        }
    }
}
