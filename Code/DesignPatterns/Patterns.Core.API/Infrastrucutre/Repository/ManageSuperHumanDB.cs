using Patterns.Core.API.Domain.Model;
using Patterns.Core.API.Domain.Repository;
using System;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace Patterns.Core.API.Infrastrucutre.Repository
{
    public class ManageSuperHumanDB : IManageSuperHumanRepository
    {
        public async Task<SuperHuman> Add(SuperHuman supperHuman)
        {
            using (SqlConnection connection = new SqlConnection(@"Data Source=DESKTOP-JIFKME0\SQLEXPRESS;Initial Catalog=ProofDb;Integrated Security=SSPI;"))
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
            string sql = $"DELETE FROM TblSuperHuman WHERE Id = @superHumanId'";

            using (var connection = new SqlConnection(@"Data Source=DESKTOP-JIFKME0\SQLEXPRESS;Initial Catalog=ProofDb;Integrated Security=SSPI;"))
            {
                using (var command = new SqlCommand(sql, connection))
                {
                    command.Parameters.AddWithValue("superHumanId", supperHumanId);
                    await command.ExecuteNonQueryAsync();
                }
            }

            return true;
        }
    }
}
