using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Patterns.Core.API.Api.Mapper.Contract;
using Patterns.Core.API.Api.Mapper.Implementation;
using Patterns.Core.API.Application.Contract;
using Patterns.Core.API.Application.Implementation;
using Patterns.Core.API.Application.Patterns.Contract;
using Patterns.Core.API.Application.Patterns.Implementation;
using Patterns.Core.API.Domain.Repository;
using Patterns.Core.API.Infrastrucutre.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Patterns.Core.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton<ISuperHumanMapper, SuperHumanMapper>();

            services.AddTransient<IManageSuperHuman, ManageSuperHuman>();
            services.AddTransient<ISuperHumanQueryServices, SuperHumanQueryServices>();

            services.AddTransient<ISearchStrategy, SearchHerosStrategy>();
            services.AddTransient<ISearchStrategy, SearchVilliansStrategy>();

            services.AddTransient<IManageSuperHumanRepository, ManageSuperHumanDB>();
            services.AddTransient<ISuperHumanQueryRepository, SuperHumanQueryDBRepository>();


            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Patterns.Core.API", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Patterns.Core.API v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}