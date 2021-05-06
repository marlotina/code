using Patterns.Core.API.Application.Patterns.Contract;
using Patterns.Core.API.Domain.enums;
using Patterns.Core.API.Domain.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Patterns.Core.API.Application.Patterns.Implementation.Base
{
    public abstract class SearchBaseStrategy : ISearchStrategy
    {
        protected virtual EnumSuperHumanType Type { get; set; }

        public abstract Task<IEnumerable<SuperHuman>> GetSuperHuman();

        public virtual bool IsMatch(EnumSuperHumanType type)
        {
            return type == this.Type;
        }
    }
}
