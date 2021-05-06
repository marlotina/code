using Patterns.Core.API.Domain.enums;
using System;

namespace Patterns.Core.API.Api.Model
{
    public class SuperHumanResponse
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public EnumSuperHumanType Type { get; set; }
    }
}
