using Core.Utilities.Results;
using Entities.Concrete;
using Entities.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Abstract
{
    public interface ICaravanService
    {
        IDataResult<List<Caravan>> GetAll();
        IDataResult<Caravan> GetById(int id);
        IResult Add(Caravan caravan);
        IResult Delete(Caravan caravan);
        IResult Update(Caravan caravan);
        IDataResult<List<CaravanDetailDto>> GetCaravanDetails();
        IDataResult<List<CaravanDetailDto>> GetCaravanDetailsById(int id);
        IDataResult<List<CaravanDetailDto>> GetByBrandId(int brandid);
        IDataResult<List<CaravanDetailDto>> GetByColorId(int colorId);
        IDataResult<List<CaravanDetailDto>> GetByColorIdWithBrandId(int colorId,int brandId);

    }
}
