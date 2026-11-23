package in.project.CarRentalApplication.service.customer;

import in.project.CarRentalApplication.dto.BookACarDto;
import in.project.CarRentalApplication.dto.CarDto;

import java.util.List;

public interface CustomerService {

    List<CarDto> getAllCars();

    boolean bookACar(BookACarDto bookACarDto);

    CarDto getCarById(Long CarId);

    List<BookACarDto> getBookingByUserId(Long Userid);
}
