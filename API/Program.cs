using Business.Abstract;
using Business.Concrete;
using DataAccess.Abstract;
using DataAccess.Concrete.EntityFramework;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddSingleton<ICaravanService, CaravanManager>();
builder.Services.AddSingleton<ICaravanDal, EfCaravanDal>();

builder.Services.AddSingleton<IColorDal, EfColorDal>();
builder.Services.AddSingleton<IColorService, ColorManager>();

builder.Services.AddSingleton<IBrandDal, EfBrandDal>();
builder.Services.AddSingleton<IBrandService, BrandManager>();


var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(builder => builder.WithOrigins("http://localhost:4200").AllowAnyHeader().AllowAnyMethod());
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
