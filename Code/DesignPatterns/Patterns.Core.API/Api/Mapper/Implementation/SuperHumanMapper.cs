using Patterns.Core.API.Api.Mapper.Contract;
using Patterns.Core.API.Api.Model;
using Patterns.Core.API.Domain.Model;

namespace Patterns.Core.API.Api.Mapper.Implementation
{
    public class SuperHumanMapper : ISuperHumanMapper
    {
        public SuperHuman Convert(CreateSuperHumanRequest source)
        {
            var result = default(SuperHuman);
            if (source != null)
            {
                result = new SuperHuman
                {
                    Name = source.Name
                };
            }

            return result;
        }

        public SuperHumanResponse Convert(SuperHuman source)
        {
            var result = default(SuperHumanResponse);
            if (source != null)
            {
                result = new SuperHumanResponse
                {
                    Name = source.Name,
                    Id = source.Id
                };
            }

            return result;
        }
    }
}
