using Patterns.Core.API.Domain.enums;
using Patterns.Core.API.Domain.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Patterns.Core.API.Application.Patterns.Contract
{
    public interface ISearchStrategy
    {
        bool IsMatch(EnumSuperHumanType type);

        Task<IEnumerable<SuperHuman>> GetSuperHuman();
    }
}
