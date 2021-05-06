using Patterns.Core.API.Domain.enums;

namespace Patterns.Core.API.Api.Model
{
    public class CreateSuperHumanRequest
    {
        public string Name { get; set; }

        public EnumSuperHumanType Type { get; set; }
    }
}
