package in.project.CarRentalApplication.dto;

import in.project.CarRentalApplication.enums.BookCarStatus;
import lombok.Data;

import java.util.Calendar;
import java.util.Date;

@Data
public class BookACarDto {

    private Long id;

    private Date fromDate;
    private Date toDate;

    private Long days;

    private Long price;

    private BookCarStatus bookCarStatus;

    private Long userId;
    private Long carId;

    private String username;

    private String email;



}
