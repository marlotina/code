using Patterns.Core.API.Domain.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Patterns.Core.API.Domain.Repository
{
    public interface ISuperHumanQueryRepository
    {
        Task<List<Villain>> GetVillains();

        Task<List<Hero>> GetGetHeros();

        Task<List<SuperHuman>> GetAll();
    }
}
