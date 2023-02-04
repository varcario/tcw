using FileUploadApi.Entities;
using FileUploadApi.Interfaces;
using FileUploadApi.Services;
using Microsoft.EntityFrameworkCore;
var builder = WebApplication.CreateBuilder(args);
const string AllowAllHeadersPolicy = "AllowAllHeadersPolicy";
builder.Services.AddCors(options =>
{
    options.AddPolicy(AllowAllHeadersPolicy,
        builder =>
        {
            builder.WithOrigins("https://localhost:7092","http://localhost:3000")
                    .AllowAnyMethod()
                   .AllowAnyHeader();
        });
});
// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<TcwDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("SocialDbConnectionString")));
builder.Services.AddTransient<IRecordService, RecordService>();
builder.Services.AddTransient<IStateService, StateService>();
var app = builder.Build();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors(AllowAllHeadersPolicy);
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();