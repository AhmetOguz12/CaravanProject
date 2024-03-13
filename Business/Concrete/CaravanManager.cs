using Business.Abstract;
using Business.Constants;
using Core.Utilities.Results;
using DataAccess.Abstract;
using DataAccess.Concrete.EntityFramework;
using Entities.Concrete;
using Entities.DTOs;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Concrete
{
    public class CaravanManager : ICaravanService
    {
        ICaravanDal _caravanDal;
        IBrandDal _brandDal;
        IColorDal _colorDal;
       
        public CaravanManager(ICaravanDal caravanDal, IBrandDal brandDal, IColorDal colorDal)
        {
            _caravanDal = caravanDal;
            _brandDal = brandDal;
            _colorDal = colorDal;
        }
    

        public IResult Add(Caravan caravan)
        {
            _caravanDal.Add(caravan);
            return new SuccessResult(Messages.CaravanAdded);
        }

        public IResult Delete(Caravan caravan)
        {
            _caravanDal.Delete(caravan);
            return new SuccessResult(Messages.CaravanDeleted);
        }

        public IDataResult<List<Caravan>> GetAll()
        {
            return new SuccessDataResult<List<Caravan>>(_caravanDal.GetAll(), Messages.CaravansListed);
        }

        public IDataResult<List<CaravanDetailDto>> GetByBrandId(int brandid)
        {
            //LINQ (Language Integrated Query) kullanarak caravans koleksiyonundaki her bir
            //Caravan öğesini CaravanDetailDto'ya dönüştürmek için kullanılıyor. 
            var caravans = _caravanDal.GetAll(x => x.BrandId == brandid);
            var brands = _brandDal.GetAll();
            var colors = _colorDal.GetAll();

            var caravanDetailDtos = caravans.Select(caravan => new CaravanDetailDto
            {
                Id = caravan.Id,
                BrandName = brands.FirstOrDefault(b => b.Id == caravan.BrandId)?.Name ?? "",
                ColorName = colors.FirstOrDefault(c => c.Id == caravan.ColorId)?.Name ?? "",
                Name = caravan.Name,
                ModelYear = caravan.ModelYear,
                DailyPrice = caravan.DailyPrice,
                Description = caravan.Description
            }).ToList();

            return new SuccessDataResult<List<CaravanDetailDto>>(caravanDetailDtos);
        }

        public IDataResult<List<CaravanDetailDto>> GetByColorId(int colorId)
        {
            var caravans = _caravanDal.GetAll(x => x.ColorId == colorId);
            var brands = _brandDal.GetAll();
            var colors = _colorDal.GetAll();
            var caravanDetailDtos = caravans.Select(caravan => new CaravanDetailDto
            {
                Id = caravan.Id,
                BrandName = brands.FirstOrDefault(b => b.Id == caravan.BrandId)?.Name ?? "",
                ColorName = colors.FirstOrDefault(c => c.Id == caravan.ColorId)?.Name ?? "",
                Name = caravan.Name,
                ModelYear = caravan.ModelYear,
                DailyPrice = caravan.DailyPrice,
                Description = caravan.Description
            }).ToList();
            return new SuccessDataResult<List<CaravanDetailDto>>(caravanDetailDtos);
        }

        public IDataResult<List<CaravanDetailDto>> GetByColorIdWithBrandId(int colorId, int brandId)
        {
            var caravans = _caravanDal.GetAll(x => x.ColorId == colorId && x.BrandId == brandId);
            var brands = _brandDal.GetAll();
            var colors = _colorDal.GetAll();

            var caravanDetailDtos = caravans.Select(caravan => new CaravanDetailDto
            {
                Id = caravan.Id,
                BrandName = brands.FirstOrDefault(b => b.Id == caravan.BrandId)?.Name ?? "",
                ColorName = colors.FirstOrDefault(c => c.Id == caravan.ColorId)?.Name ?? "",
                Name = caravan.Name,
                ModelYear = caravan.ModelYear,
                DailyPrice = caravan.DailyPrice,
                Description = caravan.Description
            }).ToList();

            return new SuccessDataResult<List<CaravanDetailDto>>(caravanDetailDtos);
        }

        public IDataResult<List<CaravanDetailDto>> GetCaravanDetailsById(int id)
        {
            var caravans = _caravanDal.GetAll();
            var brands = _brandDal.GetAll();
            var colors = _colorDal.GetAll();

            var caravanDetailDtos = caravans
                .Where(c => c.Id == id)
                .Select(caravan => new CaravanDetailDto
                {
                    Id = caravan.Id,
                    BrandName = brands.FirstOrDefault(b => b.Id == caravan.BrandId)?.Name ?? "",
                    ColorName = colors.FirstOrDefault(c => c.Id == caravan.ColorId)?.Name ?? "",
                    Name = caravan.Name,
                    ModelYear = caravan.ModelYear,
                    DailyPrice = caravan.DailyPrice,
                    Description = caravan.Description
                }).ToList();

            return new SuccessDataResult<List<CaravanDetailDto>>(caravanDetailDtos);
        }


        public IDataResult<Caravan> GetById(int id)
        {
            return new SuccessDataResult<Caravan>(_caravanDal.Get(c => c.Id == id), Messages.CaravanListed);
        }

        public IDataResult<List<CaravanDetailDto>> GetCaravanDetails()
        {
            return new SuccessDataResult<List<CaravanDetailDto>>(_caravanDal.GetCaravanDetail(), "Caravanlar Listelendi");
        }

     
        public IResult Update(Caravan caravan)
        {
            _caravanDal.Update(caravan);
            return new SuccessResult(Messages.CaravanUpdated);
        }


    }
}
