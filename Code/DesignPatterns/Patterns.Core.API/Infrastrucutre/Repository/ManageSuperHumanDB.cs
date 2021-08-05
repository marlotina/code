using Patterns.Core.API.Application.Patterns.Observer;
using Patterns.Core.API.Configuration.Contract;
using Patterns.Core.API.Domain.Model;
using Patterns.Core.API.Domain.Repository;
using System;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace Patterns.Core.API.Infrastrucutre.Repository
{
    public class ManageSuperHumanDB : IManageSuperHumanRepository
    {
        private readonly IProofConfiguration iProofConfiguration;
        private readonly ISubject iSubject;
        public ManageSuperHumanDB(
            IProofConfiguration iProofConfiguration,
            ISubject iSubject)
        {
            this.iProofConfiguration = iProofConfiguration;
            this.iSubject = iSubject;
        }

        public async Task<SuperHuman> Add(SuperHuman superHuman)
        {
            using (SqlConnection connection = new SqlConnection(this.iProofConfiguration.ConnectionString))
            {
                connection.Open();
                string sql = "INSERT INTO TblSuperHuman(Id, Name, Type) VALUES(@id,@name,@type)";
                using (SqlCommand cmd = new SqlCommand(sql, connection))
                {
                    cmd.Parameters.AddWithValue("@id", superHuman.Id);
                    cmd.Parameters.AddWithValue("@name", superHuman.Name);
                    cmd.Parameters.AddWithValue("@type", superHuman.Type);
                    cmd.CommandType = CommandType.Text;
                    await cmd.ExecuteNonQueryAsync();
                }
            }

            return superHuman;
        }

        public async Task<bool> Delete(Guid supperHumanId)
        {
            try
            {
                string sql = $"DELETE FROM TblSuperHuman WHERE Id = @superHumanId";

                using (var connection = new SqlConnection(this.iProofConfiguration.ConnectionString))
                {
                    connection.Open();
                    using (var command = new SqlCommand(sql, connection))
                    {
                        command.Parameters.AddWithValue("@superHumanId", supperHumanId);
                        await command.ExecuteNonQueryAsync();
                    }
                }

                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
}
