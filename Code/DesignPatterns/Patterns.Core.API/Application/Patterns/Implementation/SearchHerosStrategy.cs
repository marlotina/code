using Patterns.Core.API.Application.Patterns.Contract;
using Patterns.Core.API.Application.Patterns.Implementation.Base;
using Patterns.Core.API.Domain.enums;
using Patterns.Core.API.Domain.Model;
using Patterns.Core.API.Domain.Repository;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Patterns.Core.API.Application.Patterns.Implementation
{
    public class SearchHerosStrategy : SearchBaseStrategy, ISearchStrategy
    {
        private readonly ISuperHumanQueryRepository iSuperHumanQueryRepository;
        protected override EnumSuperHumanType Type => EnumSuperHumanType.Hero;

        public SearchHerosStrategy(ISuperHumanQueryRepository iSuperHumanQueryRepository)
        {
            this.iSuperHumanQueryRepository = iSuperHumanQueryRepository;
        }

        public override async Task<IEnumerable<SuperHuman>> GetSuperHuman()
        {
            return await this.iSuperHumanQueryRepository.GetGetHeros();
        }

        public override bool IsMatch(EnumSuperHumanType type)
        {
            return type == this.Type;
        }
    }
}
