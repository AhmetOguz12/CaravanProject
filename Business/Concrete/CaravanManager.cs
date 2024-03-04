using Business.Abstract;
using Business.Constants;
using Core.Utilities.Results;
using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Concrete
{
    public class CaravanManager : ICaravanService
    {
        ICaravanDal _caravanDal;

        public CaravanManager(ICaravanDal caravanDal)
        {
            _caravanDal = caravanDal;
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

        public IDataResult<List<Caravan>> GetByColorId(int colorId)
        {
            return new SuccessDataResult<List<Caravan>>(_caravanDal.GetAll(c => c.ColorId == colorId));
        }

        public IDataResult<Caravan> GetById(int id)
        {
            return new SuccessDataResult<Caravan>(_caravanDal.Get(c => c.Id == id), Messages.CaravanListed);
        }

        public IResult Update(Caravan caravan)
        {
            _caravanDal.Update(caravan);
            return new SuccessResult(Messages.CaravanUpdated);
        }

        IDataResult<List<Caravan>> ICaravanService.GetByBrandId(int brandId)
        {
            return new SuccessDataResult<List<Caravan>>(_caravanDal.GetAll(x => x.BrandId == brandId));
        }
    }
}
