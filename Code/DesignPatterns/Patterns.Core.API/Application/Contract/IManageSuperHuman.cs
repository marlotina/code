using Patterns.Core.API.Domain.Model;
using System;
using System.Threading.Tasks;

namespace Patterns.Core.API.Application.Contract
{
    public interface IManageSuperHuman
    {
        Task<SuperHuman> AddHuman(SuperHuman superHuman);

        Task<bool> DeleteHuman(Guid superHumanId);
    }
}
