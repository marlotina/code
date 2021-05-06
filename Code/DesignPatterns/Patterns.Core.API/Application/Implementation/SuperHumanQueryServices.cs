using Patterns.Core.API.Application.Contract;
using Patterns.Core.API.Application.Patterns.Contract;
using Patterns.Core.API.Domain.enums;
using Patterns.Core.API.Domain.Model;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Patterns.Core.API.Application.Implementation
{
    public class SuperHumanQueryServices : ISuperHumanQueryServices
    {
        private readonly IEnumerable<ISearchStrategy> iSearchStrategies;
        public SuperHumanQueryServices(IEnumerable<ISearchStrategy> iSearchStrategies)
        {
            this.iSearchStrategies = iSearchStrategies;
        }

        public async Task<IEnumerable<SuperHuman>> GetSuperHuman(EnumSuperHumanType type)
        {
            var searchStrategy = this.iSearchStrategies.FirstOrDefault(x => x.IsMatch(type));
            return await searchStrategy.GetSuperHuman();
        }
    }
}
