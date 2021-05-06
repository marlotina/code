using Patterns.Core.API.Application.Patterns.Contract;
using Patterns.Core.API.Domain.enums;
using Patterns.Core.API.Domain.Model;
using Patterns.Core.API.Domain.Repository;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Patterns.Core.API.Application.Patterns.Implementation
{
    public class SearchHerosStrategy : ISearchStrategy
    {
        private readonly ISuperHumanQueryRepository iSuperHumanQueryRepository;

        public SearchHerosStrategy(ISuperHumanQueryRepository iSuperHumanQueryRepository)
        {
            this.iSuperHumanQueryRepository = iSuperHumanQueryRepository;
        }

        public async Task<IEnumerable<SuperHuman>> GetSuperHuman()
        {
            return await this.iSuperHumanQueryRepository.GetGetHeros();
        }

        public bool IsMatch(EnumSuperHumanType type)
        {
            return type == EnumSuperHumanType.Hero;
        }
    }
}
