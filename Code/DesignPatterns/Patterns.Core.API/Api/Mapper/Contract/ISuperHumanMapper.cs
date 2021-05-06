using Patterns.Core.API.Api.Model;
using Patterns.Core.API.Domain.Model;

namespace Patterns.Core.API.Api.Mapper.Contract
{
    public interface ISuperHumanMapper
    {
        SuperHuman Convert(CreateSuperHumanRequest source);

        SuperHumanResponse Convert(SuperHuman source);
    }
}
