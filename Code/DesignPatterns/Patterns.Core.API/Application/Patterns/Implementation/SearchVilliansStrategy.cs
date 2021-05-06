using Patterns.Core.API.Application.Patterns.Contract;
using Patterns.Core.API.Application.Patterns.Implementation.Base;
using Patterns.Core.API.Domain.enums;
using Patterns.Core.API.Domain.Model;
using Patterns.Core.API.Domain.Repository;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Patterns.Core.API.Application.Patterns.Implementation
{
    public class SearchVilliansStrategy : SearchBaseStrategy, ISearchStrategy
    {
        private readonly ISuperHumanQueryRepository iSuperHumanQueryRepository;
        protected override EnumSuperHumanType Type => EnumSuperHumanType.Villain;

        public SearchVilliansStrategy(ISuperHumanQueryRepository iSuperHumanQueryRepository)
        {
            this.iSuperHumanQueryRepository = iSuperHumanQueryRepository;
        }

        public override async Task<IEnumerable<SuperHuman>> GetSuperHuman()
        {
            return await this.iSuperHumanQueryRepository.GetVillains();
        }
    }
}
