using Patterns.Core.API.Domain.Model;
using Patterns.Core.API.Domain.Repository;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace Patterns.Core.API.Infrastrucutre.Repository
{
    public class SuperHumanQueryDBRepository : ISuperHumanQueryRepository
    {
        public async Task<List<SuperHuman>> GetAll()
        {
            SqlConnection conn = new SqlConnection(@"Data Source=DESKTOP-JIFKME0\SQLEXPRESS;Initial Catalog=ProofDb;Integrated Security=SSPI;");
            conn.Open();

            SqlCommand command = new SqlCommand("Select id from [TblSuperHuman]", conn);
            using (SqlDataReader reader = await command.ExecuteReaderAsync())
            {
                if (await reader.ReadAsync())
                {
                    Console.WriteLine(String.Format("{0}", reader["id"]));
                }
            }

            conn.Close();

            return null;
        }

        public async Task<List<Hero>> GetGetHeros()
        {
            SqlConnection conn = new SqlConnection(@"Data Source=DESKTOP-JIFKME0\SQLEXPRESS;Initial Catalog=ProofDb;Integrated Security=SSPI;");
            conn.Open();

            SqlCommand command = new SqlCommand("Select Id, Name, Type from [TblSuperHuman] where Type=2", conn);
            // int result = command.ExecuteNonQuery();
            using (SqlDataReader reader = await command.ExecuteReaderAsync())
            {
                if (await reader.ReadAsync())
                {
                    Console.WriteLine(String.Format("{0}", reader["id"]));
                }
            }

            conn.Close();

            return null;
        }

        public async Task<List<Villain>> GetVillains()
        {
            SqlConnection conn = new SqlConnection(@"Data Source=DESKTOP-JIFKME0\SQLEXPRESS;Initial Catalog=ProofDb;Integrated Security=SSPI;");
            conn.Open();

            SqlCommand command = new SqlCommand("Select Id, Name, Type from [TblSuperHuman] where Type=1", conn);

            using (SqlDataReader reader = await command.ExecuteReaderAsync())
            {
                if (await reader.ReadAsync())
                {
                    Console.WriteLine(String.Format("{0}", reader["id"]));
                }
            }

            conn.Close();

            return null;
        }
    }
}
