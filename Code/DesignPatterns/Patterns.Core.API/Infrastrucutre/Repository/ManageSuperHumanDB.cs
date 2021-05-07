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

        public ManageSuperHumanDB(IProofConfiguration iProofConfiguration)
        {
            this.iProofConfiguration = iProofConfiguration;
        }

        public async Task<SuperHuman> Add(SuperHuman supperHuman)
        {
            using (SqlConnection connection = new SqlConnection(this.iProofConfiguration.ConnectionString))
            {
                connection.Open();
                string sql = "INSERT INTO TblSuperHuman(Id, Name, Type) VALUES(@id,@name,@type)";
                using (SqlCommand cmd = new SqlCommand(sql, connection))
                {
                    cmd.Parameters.AddWithValue("@id", supperHuman.Id);
                    cmd.Parameters.AddWithValue("@name", supperHuman.Name);
                    cmd.Parameters.AddWithValue("@type", supperHuman.Type);
                    cmd.CommandType = CommandType.Text;
                    await cmd.ExecuteNonQueryAsync();
                }
            }

            return supperHuman;
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
