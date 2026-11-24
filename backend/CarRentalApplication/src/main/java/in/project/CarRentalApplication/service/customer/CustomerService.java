package in.project.CarRentalApplication.service.customer;

import in.project.CarRentalApplication.dto.BookACarDto;
import in.project.CarRentalApplication.dto.CarDto;
import in.project.CarRentalApplication.dto.CarDtoListDto;
import in.project.CarRentalApplication.dto.SearchCarDto;

import java.util.List;

public interface CustomerService {

    List<CarDto> getAllCars();

    boolean bookACar(BookACarDto bookACarDto);

    CarDto getCarById(Long CarId);

    List<BookACarDto> getBookingByUserId(Long Userid);

    CarDtoListDto searchCar(SearchCarDto searchCarDto);
}
