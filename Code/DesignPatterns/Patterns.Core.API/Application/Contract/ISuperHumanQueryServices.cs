using Patterns.Core.API.Domain.enums;
using Patterns.Core.API.Domain.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Patterns.Core.API.Application.Contract
{
    public interface ISuperHumanQueryServices
    {
        Task<IEnumerable<SuperHuman>> GetSuperHuman(EnumSuperHumanType type);
    }
}
