using Microsoft.Extensions.Configuration;
using Patterns.Core.API.Configuration.Contract;

namespace Patterns.Core.API.Configuration.Implementation
{
    public class ProofConfiguration : IProofConfiguration
    {
        private readonly IConfiguration iConfiguration;

        public ProofConfiguration(IConfiguration iConfiguration)
        {
            this.iConfiguration = iConfiguration;
        }

        public string ConnectionString => this.iConfiguration.GetSection("ConnectionString").Get<string>();
    }
}
