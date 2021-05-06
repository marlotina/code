using Patterns.Core.API.Domain.enums;
using System;

namespace Patterns.Core.API.Domain.Model
{
    public class SuperHuman
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public EnumSuperHumanType Type { get; set; }
    }
}
