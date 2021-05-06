using Patterns.Core.API.Application.Contract;
using Patterns.Core.API.Domain.Model;
using Patterns.Core.API.Domain.Repository;
using System;
using System.Threading.Tasks;

namespace Patterns.Core.API.Application.Implementation
{
    public class ManageSuperHuman : IManageSuperHuman
    {
        private readonly IManageSuperHumanRepository iManageSuperHumanRepository;

        public ManageSuperHuman(IManageSuperHumanRepository iManageSuperHumanRepository)
        {
            this.iManageSuperHumanRepository = iManageSuperHumanRepository;
        }

        public async Task<SuperHuman> AddHuman(SuperHuman superHuman)
        {
            superHuman.Id = Guid.NewGuid();
            return await this.iManageSuperHumanRepository.Add(superHuman);
        }

        public async Task<bool> DeleteHuman(Guid superHumanId)
        {
            return await this.iManageSuperHumanRepository.Delete(superHumanId);
        }
    }
}
