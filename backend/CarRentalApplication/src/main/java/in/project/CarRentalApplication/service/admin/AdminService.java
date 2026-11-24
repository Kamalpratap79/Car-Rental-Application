package in.project.CarRentalApplication.service.admin;

import in.project.CarRentalApplication.dto.BookACarDto;
import in.project.CarRentalApplication.dto.CarDto;
import in.project.CarRentalApplication.dto.CarDtoListDto;
import in.project.CarRentalApplication.dto.SearchCarDto;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
public interface AdminService {

    boolean postCar(CarDto carDto) throws IOException;

    List<CarDto> getAllCars();

    void deleteCar(Long id);

    CarDto getCarById(Long id);

    boolean updateCar(Long CarId, CarDto carDto) throws IOException;

    List<BookACarDto> getBooking();

    boolean changeBookingStatus(Long bookingId,String status);

    CarDtoListDto searchCar(SearchCarDto searchCarDto);

}
