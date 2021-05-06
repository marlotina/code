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
            using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["connSpionshopString"].ConnectionString))
            {
                connection.Open();
                string sql = "INSERT INTO klant(klant_id,naam,voornaam) VALUES(@param1,@param2,@param3)";
                using (SqlCommand cmd = new SqlCommand(sql, connection))
                {
                    cmd.Parameters.Add("@param1", SqlDbType.Int).Value = supperHuman.Name;
                    cmd.Parameters.Add("@param2", SqlDbType.VarChar, 50).Value = supperHuman.GetType();
                    cmd.CommandType = CommandType.Text;
                    await cmd.ExecuteNonQueryAsync();
                }
            }

            return supperHuman;
        }

        public async Task<bool> Delete(Guid supperHumanId)
        {
            string sql = $"DELETE FROM TblSuperHuman WHERE Id = @superHumanId'";

            using (var connection = new SqlConnection(ConfigurationManager.ConnectionStrings["connSpionshopString"].ConnectionString))
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
