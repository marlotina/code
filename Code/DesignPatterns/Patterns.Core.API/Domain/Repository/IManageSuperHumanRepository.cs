using Patterns.Core.API.Domain.Model;
using System;
using System.Threading.Tasks;

namespace Patterns.Core.API.Domain.Repository
{
    public interface IManageSuperHumanRepository
    {
        Task<SuperHuman> Add(SuperHuman supperHuman);
        Task<bool> Delete(Guid supperHumanId);
    }
}
